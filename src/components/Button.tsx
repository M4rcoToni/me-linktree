import { SVGS } from '../svgs/svgs';
interface ButtonProps {
  title: string;
  svgtipe: 'github' | 'linkdin' | 'insta' | 'portifolio';
}

export function Button({ svgtipe, title }: ButtonProps) {
  return (

    <div className='mt-20'>
      <button className='w-[600px] p-2 bg-transparent border-2  fill-white hover:fill-purple-900 text-white flex flex-row content-center justify-center'>
        <div className=''>
          <SVGS name={svgtipe} />
        </div>
        <div>
          <span className='text-xl font-semibold block p-4 self-center'>
            {title}
          </span>
        </div>
      </button >
    </div >
  )
}