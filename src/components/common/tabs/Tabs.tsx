import * as React from "react";
import './Tabs.css'

interface ITabsContext {
    activeName?: string;
    handleTabClick?: (name: string, content: React.ReactNode) => void;
}
const TabsContext = React.createContext<ITabsContext>({});

interface State {
    activeName: string;
    activeContent: React.ReactNode;
}

interface Props {
    name: string;
    initialActive?: boolean;
    heading: () => string | JSX.Element;
}

class TabsComponent extends React.Component<{}, State> {

    public static Tab: React.FC<Props> = props => {

        const {activeName, handleTabClick} = React.useContext(TabsContext);
        React.useEffect(() => {
            if (!activeName && props.initialActive) {
                if (handleTabClick) {
                    handleTabClick(props.name, props.children);
                }
            }
        }, [props.name, props.initialActive, props.children, activeName, handleTabClick])

        return (
            <TabsContext.Consumer>
                {(context: ITabsContext) => {
                    const activeNameTab = context.activeName
                        ? context.activeName
                        : props.initialActive
                            ? props.name
                            : "";
                    const handleTabClickTab = (e: React.MouseEvent<HTMLLIElement>) => {
                        if (context.handleTabClick) {
                            context.handleTabClick(props.name, props.children);
                        }
                    };
                    return (
                        <li
                            onClick={handleTabClickTab}
                            className={props.name === activeNameTab ? "active" : ""}
                        >
                            {props.heading()}
                        </li>
                    );
                }}
            </TabsContext.Consumer>
        )
    };
    public render() {
        return (
            <TabsContext.Provider
                value={{
                    activeName: this.state ? this.state.activeName : "",
                    handleTabClick: this.handleTabClick
                }}
            >
                <ul className="tabs">{this.props.children}</ul>
                <div>{this.state && this.state.activeContent}</div>
            </TabsContext.Provider>
        );
    }

    private handleTabClick = (name: string, content: React.ReactNode) => {
        this.setState({
            activeName: name,
            activeContent: content
        })
    }
}

export const Tabs = TabsComponent;
