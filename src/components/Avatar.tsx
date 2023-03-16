interface Props {
  avatar_url?: string;
  name?: string;
  username?: string;
}
export function Avatar({ avatar_url, name, username }: Props) {

  return (
    <div className=" h-60 " >
      <div className="flex flex-col items-center justify-center">
        <img src={avatar_url} alt="avatar" className="h-36 w-36 rounded-full" />
        <span className="text-3xl text-white font-black block p-4">{name}</span>
        <span className="text-xl text-white font-black block p-4">{username}</span>
      </div>
    </div>
  );
}