import { CasamentoProvider } from "./Casamento";
import { ConfraProvider } from "./Confraternização";
import { DrinkProvider } from "./Drinks";
import { FormaturaProvider } from "./Formatura";

const Providers = ({ children }) => {
    return (
        <ConfraProvider>
            <FormaturaProvider>
                <CasamentoProvider>
                    <DrinkProvider>
                        {children}
                    </DrinkProvider>
                </CasamentoProvider>
            </FormaturaProvider>
        </ConfraProvider>

    )
}
export default Providers;