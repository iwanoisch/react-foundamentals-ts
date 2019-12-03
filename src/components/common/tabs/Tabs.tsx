import * as React from "react";
import './Tabs.css'

interface Props {
    heading: string[]
}

interface State {
    activeHeading: string;
}

class TabsComponent extends React.Component<Props, State> {
   public constructor(props: Props) {
       super(props);
       this.state = {
           activeHeading: this.props.heading &&  this.props.heading.length > 0 ? this.props.heading[0] : "",
       };
   }

    private handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const li = e.target as HTMLLIElement;
        const heading: string = li.textContent ? li.textContent :  '';
        this.setState({activeHeading: heading})
    };

    public render() {
        return (
            <ul className='tabs'>
                {this.props.heading.map( heading => (
                    <li onClick={this.handleTabClick} key={heading} className={heading === this.state.activeHeading ? 'active' : ''}>{heading}</li>
                ))}

            </ul>
        );
    }
}

export const Tabs = TabsComponent;
