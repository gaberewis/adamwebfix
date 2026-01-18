import { useLoaderData } from "react-router-dom"



const FullDescription = ()=>{
 const { product } = useLoaderData();
 const { name, images} = product;

return (<>
<img src={images[0]?.imageUrl || '#'} alt='product image' />
<h4>full description. {name}</h4>
</>

)
}

export default FullDescription;