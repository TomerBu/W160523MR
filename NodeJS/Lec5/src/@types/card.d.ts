export type ICardInput = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  address: IAddress;
  image: Image;
};

export type ICard = ICardInput & {
  bizNumber?: number;
  userId?: string;

  _id?: string;
  likes: string[];
  createdAt: Date;
};
