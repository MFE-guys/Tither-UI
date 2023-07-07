export interface RegisterMemberModel {
  id: string | number;
  userName: string;
  email: string;
  phone: string;
  type: string;
  status: string;
  historic?: string;
}

export type RegisterMemberRequiredProps = Omit<RegisterMemberModel, 'id'>;
