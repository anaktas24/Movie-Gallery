"use client"

export default function Error([error,reset]){
  return(
    <div>
      This doesn't load: {error.message}
      <button onClick={()=> reset()}>Reload</button>
    </div>
  )
}
