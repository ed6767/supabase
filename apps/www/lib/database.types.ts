export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          continent: Database['public']['Enums']['continents'] | null
          id: number
          iso2: string
          iso3: string | null
          local_name: string | null
          name: string | null
        }
        Insert: {
          continent?: Database['public']['Enums']['continents'] | null
          id?: number
          iso2: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Update: {
          continent?: Database['public']['Enums']['continents'] | null
          id?: number
          iso2?: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Relationships: []
      }
      discord_bot_challenge: {
        Row: {
          answer: string | null
          email: string | null
          id: number
          inserted_at: string
          twitter: string | null
          updated_at: string
          user_id: string
          username: string
        }
        Insert: {
          answer?: string | null
          email?: string | null
          id?: number
          inserted_at?: string
          twitter?: string | null
          updated_at?: string
          user_id: string
          username: string
        }
        Update: {
          answer?: string | null
          email?: string | null
          id?: number
          inserted_at?: string
          twitter?: string | null
          updated_at?: string
          user_id?: string
          username?: string
        }
        Relationships: []
      }
      dpa_downloads: {
        Row: {
          contact_email: string
          created_at: string | null
          document: string | null
          id: number
          updated_at: string | null
        }
        Insert: {
          contact_email: string
          created_at?: string | null
          document?: string | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          contact_email?: string
          created_at?: string | null
          document?: string | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      enterprise_contacts: {
        Row: {
          company_name: string
          company_size: string | null
          contact_email: string
          contact_first_name: string | null
          contact_last_name: string | null
          contact_name: string
          contact_phone: string | null
          contacted: boolean
          country: string | null
          created_at: string
          details: string | null
          id: number
        }
        Insert: {
          company_name: string
          company_size?: string | null
          contact_email: string
          contact_first_name?: string | null
          contact_last_name?: string | null
          contact_name: string
          contact_phone?: string | null
          contacted?: boolean
          country?: string | null
          created_at?: string
          details?: string | null
          id?: number
        }
        Update: {
          company_name?: string
          company_size?: string | null
          contact_email?: string
          contact_first_name?: string | null
          contact_last_name?: string | null
          contact_name?: string
          contact_phone?: string | null
          contacted?: boolean
          country?: string | null
          created_at?: string
          details?: string | null
          id?: number
        }
        Relationships: []
      }
      'get-tshirt-competition': {
        Row: {
          created_at: string | null
          email: string
          id: number
          size: string | null
          twitter: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          size?: string | null
          twitter?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          size?: string | null
          twitter?: string | null
        }
        Relationships: []
      }
      'get-tshirt-competition-2': {
        Row: {
          created_at: string | null
          email: string
          id: number
          size: string | null
          twitter: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          size?: string | null
          twitter?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          size?: string | null
          twitter?: string | null
        }
        Relationships: []
      }
      github_users: {
        Row: {
          createdAt: string
          id: string
          userData: Json | null
        }
        Insert: {
          createdAt?: string
          id?: string
          userData?: Json | null
        }
        Update: {
          createdAt?: string
          id?: string
          userData?: Json | null
        }
        Relationships: []
      }
      lw5_tickets: {
        Row: {
          createdAt: string
          email: string | null
          id: string
          name: string | null
          ticketNumber: number
          username: string | null
        }
        Insert: {
          createdAt?: string
          email?: string | null
          id: string
          name?: string | null
          ticketNumber?: number
          username?: string | null
        }
        Update: {
          createdAt?: string
          email?: string | null
          id?: string
          name?: string | null
          ticketNumber?: number
          username?: string | null
        }
        Relationships: []
      }
      lw6_creators: {
        Row: {
          created_at: string | null
          description: string
          first_name: string | null
          id: number
          is_live: boolean | null
          last_name: string | null
          link: string | null
          link_title: string | null
          profile_picture: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string
          first_name?: string | null
          id?: number
          is_live?: boolean | null
          last_name?: string | null
          link?: string | null
          link_title?: string | null
          profile_picture?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          first_name?: string | null
          id?: number
          is_live?: boolean | null
          last_name?: string | null
          link?: string | null
          link_title?: string | null
          profile_picture?: string | null
        }
        Relationships: []
      }
      lw6_days: {
        Row: {
          blog_link: string | null
          created_at: string | null
          docs_link: string | null
          id: string
          is_new: boolean | null
          release_date: string | null
          steps: Json | null
          title: string | null
        }
        Insert: {
          blog_link?: string | null
          created_at?: string | null
          docs_link?: string | null
          id?: string
          is_new?: boolean | null
          release_date?: string | null
          steps?: Json | null
          title?: string | null
        }
        Update: {
          blog_link?: string | null
          created_at?: string | null
          docs_link?: string | null
          id?: string
          is_new?: boolean | null
          release_date?: string | null
          steps?: Json | null
          title?: string | null
        }
        Relationships: []
      }
      lw6_tickets: {
        Row: {
          createdAt: string
          email: string | null
          id: string
          name: string | null
          sharedOnLinkedIn: boolean
          sharedOnTwitter: boolean
          ticketNumber: number
          username: string | null
        }
        Insert: {
          createdAt?: string
          email?: string | null
          id?: string
          name?: string | null
          sharedOnLinkedIn?: boolean
          sharedOnTwitter?: boolean
          ticketNumber?: number
          username?: string | null
        }
        Update: {
          createdAt?: string
          email?: string | null
          id?: string
          name?: string | null
          sharedOnLinkedIn?: boolean
          sharedOnTwitter?: boolean
          ticketNumber?: number
          username?: string | null
        }
        Relationships: []
      }
      lw7_tickets: {
        Row: {
          bg_image_id: number | null
          createdAt: string
          email: string | null
          id: string
          name: string | null
          referred_by: string | null
          sharedOnLinkedIn: string | null
          sharedOnTwitter: string | null
          ticketNumber: number
          username: string | null
        }
        Insert: {
          bg_image_id?: number | null
          createdAt?: string
          email?: string | null
          id?: string
          name?: string | null
          referred_by?: string | null
          sharedOnLinkedIn?: string | null
          sharedOnTwitter?: string | null
          ticketNumber?: number
          username?: string | null
        }
        Update: {
          bg_image_id?: number | null
          createdAt?: string
          email?: string | null
          id?: string
          name?: string | null
          referred_by?: string | null
          sharedOnLinkedIn?: string | null
          sharedOnTwitter?: string | null
          ticketNumber?: number
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lw7_tickets_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      lw8_tickets: {
        Row: {
          bg_image_id: number | null
          createdAt: string
          email: string | null
          id: string
          metadata: Json | null
          name: string | null
          referred_by: string | null
          sharedOnLinkedIn: string | null
          sharedOnTwitter: string | null
          ticketNumber: number
          username: string | null
        }
        Insert: {
          bg_image_id?: number | null
          createdAt?: string
          email?: string | null
          id?: string
          metadata?: Json | null
          name?: string | null
          referred_by?: string | null
          sharedOnLinkedIn?: string | null
          sharedOnTwitter?: string | null
          ticketNumber?: number
          username?: string | null
        }
        Update: {
          bg_image_id?: number | null
          createdAt?: string
          email?: string | null
          id?: string
          metadata?: Json | null
          name?: string | null
          referred_by?: string | null
          sharedOnLinkedIn?: string | null
          sharedOnTwitter?: string | null
          ticketNumber?: number
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lw8_tickets_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      mfa_early_access_contacts: {
        Row: {
          company_name: string
          company_size: string | null
          contact_email: string
          contact_first_name: string | null
          contact_last_name: string | null
          contact_name: string
          contact_phone: string | null
          contacted: boolean
          country: string | null
          created_at: string
          details: string | null
          id: number
        }
        Insert: {
          company_name: string
          company_size?: string | null
          contact_email: string
          contact_first_name?: string | null
          contact_last_name?: string | null
          contact_name: string
          contact_phone?: string | null
          contacted?: boolean
          country?: string | null
          created_at?: string
          details?: string | null
          id?: number
        }
        Update: {
          company_name?: string
          company_size?: string | null
          contact_email?: string
          contact_first_name?: string | null
          contact_last_name?: string | null
          contact_name?: string
          contact_phone?: string | null
          contacted?: boolean
          country?: string | null
          created_at?: string
          details?: string | null
          id?: number
        }
        Relationships: []
      }
      partner_contacts: {
        Row: {
          company: string
          contacted: boolean
          country: string
          created_at: string
          details: string | null
          email: string
          first: string
          id: number
          last: string
          phone: string | null
          size: number | null
          title: string | null
          type: Database['public']['Enums']['partner_type']
          website: string
        }
        Insert: {
          company: string
          contacted?: boolean
          country: string
          created_at?: string
          details?: string | null
          email: string
          first: string
          id?: number
          last: string
          phone?: string | null
          size?: number | null
          title?: string | null
          type: Database['public']['Enums']['partner_type']
          website: string
        }
        Update: {
          company?: string
          contacted?: boolean
          country?: string
          created_at?: string
          details?: string | null
          email?: string
          first?: string
          id?: number
          last?: string
          phone?: string | null
          size?: number | null
          title?: string | null
          type?: Database['public']['Enums']['partner_type']
          website?: string
        }
        Relationships: []
      }
      partners: {
        Row: {
          approved: boolean | null
          call_to_action_link: string | null
          category: string
          contact: number
          created_at: string
          description: string
          developer: string
          docs: string | null
          id: number
          images: string[] | null
          logo: string
          overview: string
          slug: string
          title: string
          tsv: unknown | null
          type: Database['public']['Enums']['partner_type']
          video: string | null
          website: string
        }
        Insert: {
          approved?: boolean | null
          call_to_action_link?: string | null
          category: string
          contact: number
          created_at?: string
          description: string
          developer: string
          docs?: string | null
          id?: number
          images?: string[] | null
          logo: string
          overview: string
          slug: string
          title: string
          tsv?: unknown | null
          type: Database['public']['Enums']['partner_type']
          video?: string | null
          website: string
        }
        Update: {
          approved?: boolean | null
          call_to_action_link?: string | null
          category?: string
          contact?: number
          created_at?: string
          description?: string
          developer?: string
          docs?: string | null
          id?: number
          images?: string[] | null
          logo?: string
          overview?: string
          slug?: string
          title?: string
          tsv?: unknown | null
          type?: Database['public']['Enums']['partner_type']
          video?: string | null
          website?: string
        }
        Relationships: [
          {
            foreignKeyName: 'partners_contact_fkey'
            columns: ['contact']
            referencedRelation: 'partner_contacts'
            referencedColumns: ['id']
          }
        ]
      }
      soc2_requests: {
        Row: {
          company_name: string
          company_size: string | null
          contact_email: string
          contact_first_name: string | null
          contact_last_name: string | null
          contact_name: string
          contact_phone: string | null
          contacted: boolean
          country: string | null
          created_at: string
          details: string | null
          id: number
        }
        Insert: {
          company_name: string
          company_size?: string | null
          contact_email: string
          contact_first_name?: string | null
          contact_last_name?: string | null
          contact_name: string
          contact_phone?: string | null
          contacted?: boolean
          country?: string | null
          created_at?: string
          details?: string | null
          id?: number
        }
        Update: {
          company_name?: string
          company_size?: string | null
          contact_email?: string
          contact_first_name?: string | null
          contact_last_name?: string | null
          contact_name?: string
          contact_phone?: string | null
          contacted?: boolean
          country?: string | null
          created_at?: string
          details?: string | null
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      lw6_tickets_golden: {
        Row: {
          createdAt: string | null
          golden: boolean | null
          id: string | null
          name: string | null
          ticketNumber: number | null
          username: string | null
        }
        Insert: {
          createdAt?: string | null
          golden?: never
          id?: string | null
          name?: string | null
          ticketNumber?: number | null
          username?: string | null
        }
        Update: {
          createdAt?: string | null
          golden?: never
          id?: string | null
          name?: string | null
          ticketNumber?: number | null
          username?: string | null
        }
        Relationships: []
      }
      lw7_tickets_golden: {
        Row: {
          bg_image_id: number | null
          createdAt: string | null
          golden: boolean | null
          id: string | null
          name: string | null
          referrals: number | null
          sharedOnLinkedIn: string | null
          sharedOnTwitter: string | null
          ticketNumber: number | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lw7_tickets_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      lw8_tickets_golden: {
        Row: {
          createdAt: string | null
          golden: boolean | null
          id: string | null
          metadata: Json | null
          name: string | null
          referrals: number | null
          sharedOnLinkedIn: string | null
          sharedOnTwitter: string | null
          ticketNumber: number | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lw8_tickets_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Functions: {
      _pgr_array_reverse: {
        Args: {
          '': unknown
        }
        Returns: unknown
      }
      _pgr_articulationpoints: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_astar:
        | {
            Args: {
              edges_sql: string
              start_vids: unknown
              end_vids: unknown
              directed?: boolean
              heuristic?: number
              factor?: number
              epsilon?: number
              only_cost?: boolean
              normal?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              directed?: boolean
              heuristic?: number
              factor?: number
              epsilon?: number
              only_cost?: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_bellmanford:
        | {
            Args: {
              edges_sql: string
              from_vids: unknown
              to_vids: unknown
              directed: boolean
              only_cost: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              directed: boolean
              only_cost: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_biconnectedcomponents: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_binarybreadthfirstsearch:
        | {
            Args: {
              edges_sql: string
              from_vids: unknown
              to_vids: unknown
              directed?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              directed?: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_bipartite: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_boost_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_breadthfirstsearch: {
        Args: {
          edges_sql: string
          from_vids: unknown
          max_depth: number
          directed: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_bridges: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_build_type: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_checkverttab: {
        Args: {
          vertname: string
          columnsarr: string[]
          reporterrs?: number
          fnname?: string
        }
        Returns: Record<string, unknown>
      }
      _pgr_chinesepostman: {
        Args: {
          edges_sql: string
          only_cost: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_compilation_date: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_compiler_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_connectedcomponents: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_contraction: {
        Args: {
          edges_sql: string
          contraction_order: number[]
          max_cycles?: number
          forbidden_vertices?: number[]
          directed?: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_createindex:
        | {
            Args: {
              sname: string
              tname: string
              colname: string
              indext: string
              reporterrs?: number
              fnname?: string
            }
            Returns: undefined
          }
        | {
            Args: {
              tabname: string
              colname: string
              indext: string
              reporterrs?: number
              fnname?: string
            }
            Returns: undefined
          }
      _pgr_depthfirstsearch: {
        Args: {
          edges_sql: string
          root_vids: unknown
          directed: boolean
          max_depth: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_dijkstra:
        | {
            Args: {
              edges_sql: string
              start_vids: unknown
              end_vids: unknown
              directed: boolean
              only_cost: boolean
              normal: boolean
              n_goals: number
              global: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              directed: boolean
              only_cost: boolean
              n_goals: number
              global: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              start_vids: unknown
              end_vids: unknown
              directed?: boolean
              only_cost?: boolean
              normal?: boolean
              n_goals?: number
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              directed?: boolean
              only_cost?: boolean
              normal?: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_dijkstravia: {
        Args: {
          edges_sql: string
          via_vids: unknown
          directed: boolean
          strict: boolean
          u_turn_on_edge: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_drivingdistance: {
        Args: {
          edges_sql: string
          start_vids: unknown
          distance: number
          directed?: boolean
          equicost?: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_edgecoloring: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_edwardmoore:
        | {
            Args: {
              edges_sql: string
              from_vids: unknown
              to_vids: unknown
              directed?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              directed?: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_endpoint: {
        Args: {
          g: unknown
        }
        Returns: unknown
      }
      _pgr_floydwarshall: {
        Args: {
          edges_sql: string
          directed: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_get_statement: {
        Args: {
          o_sql: string
        }
        Returns: string
      }
      _pgr_getcolumnname:
        | {
            Args: {
              sname: string
              tname: string
              col: string
              reporterrs?: number
              fnname?: string
            }
            Returns: string
          }
        | {
            Args: {
              tab: string
              col: string
              reporterrs?: number
              fnname?: string
            }
            Returns: string
          }
      _pgr_getcolumntype:
        | {
            Args: {
              sname: string
              tname: string
              cname: string
              reporterrs?: number
              fnname?: string
            }
            Returns: string
          }
        | {
            Args: {
              tab: string
              col: string
              reporterrs?: number
              fnname?: string
            }
            Returns: string
          }
      _pgr_gettablename: {
        Args: {
          tab: string
          reporterrs?: number
          fnname?: string
        }
        Returns: Record<string, unknown>
      }
      _pgr_git_hash: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_iscolumnindexed:
        | {
            Args: {
              sname: string
              tname: string
              cname: string
              reporterrs?: number
              fnname?: string
            }
            Returns: boolean
          }
        | {
            Args: {
              tab: string
              col: string
              reporterrs?: number
              fnname?: string
            }
            Returns: boolean
          }
      _pgr_iscolumnintable: {
        Args: {
          tab: string
          col: string
        }
        Returns: boolean
      }
      _pgr_isplanar: {
        Args: {
          '': string
        }
        Returns: boolean
      }
      _pgr_johnson: {
        Args: {
          edges_sql: string
          directed: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_ksp: {
        Args: {
          edges_sql: string
          start_vid: number
          end_vid: number
          k: number
          directed: boolean
          heap_paths: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_lengauertarjandominatortree: {
        Args: {
          edges_sql: string
          root_vid: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_lib_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_linegraphfull: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_makeconnected: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_maxcardinalitymatch: {
        Args: {
          edges_sql: string
          directed: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_maxflow:
        | {
            Args: {
              edges_sql: string
              sources: unknown
              targets: unknown
              algorithm?: number
              only_flow?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              algorithm?: number
              only_flow?: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_maxflowmincost:
        | {
            Args: {
              edges_sql: string
              sources: unknown
              targets: unknown
              only_cost?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              combinations_sql: string
              only_cost?: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_msg: {
        Args: {
          msgkind: number
          fnname: string
          msg?: string
        }
        Returns: undefined
      }
      _pgr_onerror: {
        Args: {
          errcond: boolean
          reporterrs: number
          fnname: string
          msgerr: string
          hinto?: string
          msgok?: string
        }
        Returns: undefined
      }
      _pgr_operating_system: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_parameter_check: {
        Args: {
          fn: string
          sql: string
          big?: boolean
        }
        Returns: boolean
      }
      _pgr_pgsql_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _pgr_pointtoid: {
        Args: {
          point: unknown
          tolerance: number
          vertname: string
          srid: number
        }
        Returns: number
      }
      _pgr_quote_ident: {
        Args: {
          idname: string
        }
        Returns: string
      }
      _pgr_sequentialvertexcoloring: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_startpoint: {
        Args: {
          g: unknown
        }
        Returns: unknown
      }
      _pgr_stoerwagner: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_strongcomponents: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_topologicalsort: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_transitiveclosure: {
        Args: {
          edges_sql: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_trsp: {
        Args: {
          sql: string
          source_eid: number
          source_pos: number
          target_eid: number
          target_pos: number
          directed: boolean
          has_reverse_cost: boolean
          turn_restrict_sql?: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_trspviavertices: {
        Args: {
          sql: string
          vids: number[]
          directed: boolean
          has_rcost: boolean
          turn_restrict_sql?: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_tsp: {
        Args: {
          matrix_row_sql: string
          start_id?: number
          end_id?: number
          max_processing_time?: number
          tries_per_temperature?: number
          max_changes_per_temperature?: number
          max_consecutive_non_changes?: number
          initial_temperature?: number
          final_temperature?: number
          cooling_factor?: number
          randomize?: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_tspeuclidean: {
        Args: {
          coordinates_sql: string
          start_id?: number
          end_id?: number
          max_processing_time?: number
          tries_per_temperature?: number
          max_changes_per_temperature?: number
          max_consecutive_non_changes?: number
          initial_temperature?: number
          final_temperature?: number
          cooling_factor?: number
          randomize?: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_versionless: {
        Args: {
          v1: string
          v2: string
        }
        Returns: boolean
      }
      _pgr_withpoints:
        | {
            Args: {
              edges_sql: string
              points_sql: string
              start_pids: unknown
              end_pids: unknown
              directed: boolean
              driving_side: string
              details: boolean
              only_cost?: boolean
              normal?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              points_sql: string
              combinations_sql: string
              directed: boolean
              driving_side: string
              details: boolean
              only_cost?: boolean
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_withpointsdd: {
        Args: {
          edges_sql: string
          points_sql: string
          start_pid: unknown
          distance: number
          directed?: boolean
          driving_side?: string
          details?: boolean
          equicost?: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_withpointsksp: {
        Args: {
          edges_sql: string
          points_sql: string
          start_pid: number
          end_pid: number
          k: number
          directed: boolean
          heap_paths: boolean
          driving_side: string
          details: boolean
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_withpointsvia: {
        Args: {
          sql: string
          via_edges: number[]
          fraction: number[]
          directed?: boolean
        }
        Returns: Record<string, unknown>[]
      }
      increment_referral: {
        Args: {
          username: string
        }
        Returns: undefined
      }
      pgr_articulationpoints: {
        Args: {
          '': string
        }
        Returns: number[]
      }
      pgr_biconnectedcomponents: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_bipartite: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_bridges: {
        Args: {
          '': string
        }
        Returns: number[]
      }
      pgr_chinesepostman: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_chinesepostmancost: {
        Args: {
          '': string
        }
        Returns: number
      }
      pgr_connectedcomponents: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_edgecoloring: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_full_version: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>
      }
      pgr_isplanar: {
        Args: {
          '': string
        }
        Returns: boolean
      }
      pgr_kruskal: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_linegraphfull: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_makeconnected: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_prim: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_sequentialvertexcoloring: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_stoerwagner: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_strongcomponents: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_topologicalsort: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_transitiveclosure: {
        Args: {
          '': string
        }
        Returns: Record<string, unknown>[]
      }
      pgr_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      continents:
        | 'Africa'
        | 'Antarctica'
        | 'Asia'
        | 'Europe'
        | 'Oceania'
        | 'North America'
        | 'South America'
      partner_type: 'technology' | 'expert'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
