import { NewMessage } from "./components/NewMessage"
import { LastMessage } from "./components/Subscription"


export const App = () => {
    return (

        <div>
            <NewMessage />
            <LastMessage variables={{user: "taka"}} />
        </div>
        

    )
}

