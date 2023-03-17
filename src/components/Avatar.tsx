interface Props {
  avatar_url?: string;
  name?: string;
  username?: string;
}
export function Avatar({ avatar_url, name, username }: Props) {

  return (
    <div className=" h-60 pb-16" >
      <div className="flex flex-col items-center justify-center ">
        <div className="mb-7">
          <img src={avatar_url} alt="avatar" className="h-40 w-40 rounded-full " />
        </div>
        <span className="text-3xl text-white font-black block p-4">{name}</span>
        <span className="text-xl font-bold block p-4  bg-gradient text-transparent bg-clip-text">{username}</span>
      </div>
    </div>
  );
}