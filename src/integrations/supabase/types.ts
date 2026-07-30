export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      class_bookings: {
        Row: {
          class_type: string
          created_at: string
          id: string
          name: string
          notes: string | null
          phone: string
          preferred_date: string | null
          preferred_time: string | null
          status: string
          user_id: string | null
        }
        Insert: {
          class_type: string
          created_at?: string
          id?: string
          name: string
          notes?: string | null
          phone: string
          preferred_date?: string | null
          preferred_time?: string | null
          status?: string
          user_id?: string | null
        }
        Update: {
          class_type?: string
          created_at?: string
          id?: string
          name?: string
          notes?: string | null
          phone?: string
          preferred_date?: string | null
          preferred_time?: string | null
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      enquiries: {
        Row: {
          created_at: string
          email: string | null
          id: string
          message: string | null
          name: string
          package_interest: string | null
          phone: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name: string
          package_interest?: string | null
          phone: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          package_interest?: string | null
          phone?: string
          user_id?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string
          id: string
          message: string
          name: string
          phone: string | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          name: string
          phone?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      parq_forms: {
        Row: {
          answers: Json
          created_at: string
          date_of_birth: string | null
          declaration: boolean
          id: string
          name: string
          phone: string
          signature: string | null
          user_id: string | null
        }
        Insert: {
          answers?: Json
          created_at?: string
          date_of_birth?: string | null
          declaration?: boolean
          id?: string
          name: string
          phone: string
          signature?: string | null
          user_id?: string | null
        }
        Update: {
          answers?: Json
          created_at?: string
          date_of_birth?: string | null
          declaration?: boolean
          id?: string
          name?: string
          phone?: string
          signature?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
        }
        Relationships: []
      }
      pt_bookings: {
        Row: {
          created_at: string
          goal: string | null
          id: string
          name: string
          notes: string | null
          phone: string
          plan: string | null
          preferred_date: string | null
          preferred_time: string | null
          status: string
          trainer: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          goal?: string | null
          id?: string
          name: string
          notes?: string | null
          phone: string
          plan?: string | null
          preferred_date?: string | null
          preferred_time?: string | null
          status?: string
          trainer?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          goal?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string
          plan?: string | null
          preferred_date?: string | null
          preferred_time?: string | null
          status?: string
          trainer?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      pt_contracts: {
        Row: {
          agreed: boolean
          created_at: string
          id: string
          name: string
          phone: string
          plan: string | null
          sessions: string | null
          signature: string
          start_date: string | null
          user_id: string | null
        }
        Insert: {
          agreed?: boolean
          created_at?: string
          id?: string
          name: string
          phone: string
          plan?: string | null
          sessions?: string | null
          signature: string
          start_date?: string | null
          user_id?: string | null
        }
        Update: {
          agreed?: boolean
          created_at?: string
          id?: string
          name?: string
          phone?: string
          plan?: string | null
          sessions?: string | null
          signature?: string
          start_date?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      trial_waivers: {
        Row: {
          age: number | null
          agreed: boolean
          created_at: string
          emergency_contact: string | null
          id: string
          name: string
          phone: string
          signature: string
          trial_date: string | null
          user_id: string | null
        }
        Insert: {
          age?: number | null
          agreed?: boolean
          created_at?: string
          emergency_contact?: string | null
          id?: string
          name: string
          phone: string
          signature: string
          trial_date?: string | null
          user_id?: string | null
        }
        Update: {
          age?: number | null
          agreed?: boolean
          created_at?: string
          emergency_contact?: string | null
          id?: string
          name?: string
          phone?: string
          signature?: string
          trial_date?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
