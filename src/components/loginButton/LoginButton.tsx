import Image from 'next/image'; 

function LoginButton(props: {
    img: string
}) {
  return (
    <>
       <div><a href="#" className="block py-2 px-10 rounded shadow hover:bg-[#f6f6f6]"><Image src={props.img} alt=""/></a></div>
    </>
  )
}

export default LoginButton;