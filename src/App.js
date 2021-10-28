import './App.css';
import CharacktersComponent from "./components/characters/charackters.component";
import Car from './components/Car/car'

function App() {
    return (
        <div className="App">
            {/*<CharacktersComponent description ={'Ksenobait'} image={'https://lh3.googleusercontent.com/proxy/oC7yNDCrAFACbOOmk0Or_uxixgrADbHkqfXe0U4PbeFFrgeJozjebSGrn-VlUk0g-dY2XAv-Eol2KXpZZ86acS6IUoxT-iFkWp8'}/>*/}
            {/*<CharacktersComponent description ={'Melisa'} image={'https://coollib.com/i/59/210559/any2fbimgloader00.jpg'}/>*/}
            <Car model={'subaru'} deskription={'lega'} power={'3500'} volume={'3'}/>
            <Car model={'Mazda'} deskription={'prima'} power={'6000'} volume={'6'}/>
            <Car model={'BMW'} deskription={'pyana'} power={'4200'} volume={'4'}/>
            <Car model={'subaru'} deskription={'l300'} power={'800'} volume={'1'}/>

        </div>
    )
}

export default App;
