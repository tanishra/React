
import './App.css'
import Card from './components/Card'

function App() {
  // const [count,setCount] = useState(0)

  let obj = {
    username : "Tanish",
    age : 21
  }

  let myarr = [1,2,3,4];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

     {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/25935100/pexels-photo-25935100/free-photo-of-work-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

<Card channel = "ChaiAurCode" myobj = {obj} myarr = {myarr} bTntext = "click me"/>

<Card channel="Delby" bTntext = "visit me"/>
    </>
  )
}

export default App
