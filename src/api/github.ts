
export interface UserInfos {
  login: string;
  id: number;
  name: string;
  email: string;
  avatar_url: string;
}

export async function getMyDataFromGit(username: string): Promise<UserInfos> {
  const data = await fetch(`https://api.github.com/users/m4rcotoni`)
    .then((res) => res.json())

  return {
    login: data.login,
    id: data.id,
    name: data.name,
    email: data.email,
    avatar_url: data.avatar_url,
  };
}
