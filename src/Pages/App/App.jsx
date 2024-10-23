import { AppContext, AppProvider } from "../../Context";
import { ComponenteContexto } from "../Components/ComponenteContexto";
import { ConditionalComponent } from "../Components/ConditionalComponent";
import { UsersContainer } from "../Components/UsersContainer";

const App = () => {

  return(
    <AppProvider>
      <UsersContainer/>
      <div>
        <ConditionalComponent/>
        <ConditionalComponent/>
      </div>
      <ComponenteContexto/>
    </AppProvider>
  );
}

export default App;
