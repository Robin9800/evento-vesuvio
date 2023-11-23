import React, {useState}  from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


export default function ImageGallery({ images }) {
  const [data, setData] = useState({img: '', i:0})
 

  const viewImage = (img, i)=>{ 
    setData({img, i})
  }
 

  return (
    <>
    {data.img &&
      <div style={{width: '100%', 
        height: '100vh', 
        background: 'black', 
        position: 'fixed', 
        display:'flex', 
        justifyContent: 'center',
        alignItems:'center',
        overflow:'hidden'
      }}>
        <button style={{position:'absolute', top: '10px', right: '10px'}}>X</button>
        <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%' }}/>
      </div>
    }
    <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
      >
        <Masonry gutter="10px">
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    style={{width: "100%", display: "block", cursor: "pointer"}}
                    alt=""
                    onClick={()=> viewImage(img, i)}
                />
            ))}
        </Masonry>
      </ResponsiveMasonry>
      </>
  );
}
