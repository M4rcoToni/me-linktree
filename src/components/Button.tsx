import { SVGS } from '../svgs/svgs';
interface ButtonProps {
  title?: string;
  svgtipe: "github" | "linkdin" | "insta";
}

export function Button({ svgtipe, title }: ButtonProps) {
  return (

    <div className="mt-20">


      <button className="w-full h-16 fill-white hover:fill-purple-900 text-white flex flex-row content-center">
        <SVGS name={svgtipe} />
        <span className="text-xl font-semibold block p-4">
          Purple to pink
        </span>
      </button >
    </div >
  )
}