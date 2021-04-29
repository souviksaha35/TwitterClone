export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  HomeScreen: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type User =  {
  id: string,
  name: string,
  username: string,
  image?: string,
}

export type TweetType = {
  id: string,
  createdAt: string,
  user: User,
  content: string,
  image?: string,
}

export type TabOneParamList = {
  TabOneScreen: undefined;
  HomeScreen: undefined;
  TweetScreen: undefined;
  CreateTweet: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
