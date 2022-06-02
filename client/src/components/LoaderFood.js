import{PanLoader, PanContainer, Loader, Pan, Handle, Shadow} from "./StylesSheets/Loader"
import React from 'react'

export function LoaderFood() {
    return (

  <PanLoader>

       <Loader/>
       <PanContainer>
         <Pan/>
         <Handle/>
      </PanContainer>
      <Shadow/>

</ PanLoader>
      
    )
}

export default LoaderFood