import { useState , useCallback , useEffect, useRef} from 'react'


function App() {
  const [Length ,setLength] = useState(8)
  const [NumberAllowed,setNumberAllowed] = useState(false)
  const [CharacterAllowed,setCharacterAllowed] = useState(false)
  const [Password,setPassword] = useState("")

  const passwordRef = useRef(null)

  const CopyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5) 
    window.navigator.clipboard.writeText(Password)
  },[Password])
  
  
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(NumberAllowed) str += "0123456789"
    if(CharacterAllowed) str += "~!@#$%^&*(){}[]_-+=|`"

    for(let i = 1;i <= Length ;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[Length,NumberAllowed,CharacterAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
  },[Length,NumberAllowed,CharacterAllowed,passwordGenerator ])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-600'>
      
        <h1 className='text-4xl text-center text-white my-2'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value = {Password}
          className='outline-none w-full py-1 px-3 '
          placeholder='Password'
          readOnly 
          ref={passwordRef}/>

          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 '
          onClick={CopyToClipBoard}>Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min = {5}
                max = {100}
                value = {Length}
                className='cursor-pointer' 
                onChange={(e) => {setLength(e.target.value)}}/>
              <label>Length : {Length} </label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {NumberAllowed}
            id = "NumberAllowed"
            onChange={ () => {
              setNumberAllowed((prev) => !prev);
            } } />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {CharacterAllowed}
            id = "CharactersAllowed"
            onChange={ () => {
              setCharacterAllowed((prev) => !prev);
            } }/>
            <label>Characters</label>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
