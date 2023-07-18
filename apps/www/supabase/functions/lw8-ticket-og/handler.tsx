import React from 'https://esm.sh/react@18.2.0?deno-std=0.140.0'
import { ImageResponse } from 'https://deno.land/x/og_edge@0.0.4/mod.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'
import { corsHeaders } from '../_shared/cors.ts'

const STORAGE_URL = 'https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/lw8'

const BUCKET_FOLDER_VERSION = 'v1'

export async function handler(req: Request) {
  try {
    if (req.method !== 'POST') throw new Error('method not supported')
    const {
      username = 'fsansalvadore',
      golden = false,
    }: {
      username?: string
      golden?: boolean
    } = await req.json()

    // Else, generate image ad upload to storage.

    const timestamp = encodeURI(new Date().toISOString())

    const TICKET = {
      REG: `${STORAGE_URL}/tickets/regular/${BUCKET_FOLDER_VERSION}/${username}.png?t=${timestamp}`,
      GOLD: `${STORAGE_URL}/tickets/golden/${BUCKET_FOLDER_VERSION}/${username}.png?t=${timestamp}`,
    }

    const geneartedOGImage = new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '628px',
            position: 'relative',
            backgroundColor: '#000',
            color: '#F8F9FA',
            fontFamily: '"Circular"',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: '60px',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(',
          }}
        >
          {/* Background  */}
          <img width="1100" height="576" src={golden ? TICKET.GOLD : TICKET.REG} />
        </div>
      ),
      {
        width: 1200,
        height: 628,
        headers: {
          'content-type': 'image/png',
          'cache-control': 'public, max-age=31536000, s-maxage=31536000, no-transform, immutable',
          'cdn-cache-control': 'max-age=31536000',
        },
      }
    )

    // Upload image to storage.
    const supabaseAdminClient = createClient(
      // Supabase API URL - env var exported by default when deployed.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API SERVICE ROLE KEY - env var exported by default when deployed.
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )
    const { error: storageError } = await supabaseAdminClient.storage
      .from('images')
      .upload(
        `lw8/og/${golden ? 'golden' : 'regular'}/${BUCKET_FOLDER_VERSION}/${username}.png`,
        geneartedOGImage.body!,
        {
          contentType: 'image/png',
          cacheControl: '31536000',
          upsert: true,
        }
      )
    if (storageError) throw new Error(`storageError: ${storageError.message}`)

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}
