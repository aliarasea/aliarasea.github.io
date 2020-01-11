import React from 'react';

export class TodoList extends React.Component {

    constructor(props: any) {
        super(props);
        this.stop = this.stop.bind(this);
    }

    stop: () => any = function () {
        alert('stop');
    };

    //component real dom a baglanmadan hemen oncesinde calisiyor.
    componentWillMount(): void {
    }

    //component real dom a baglandiktan sonra calisiyor.
    componentDidMount(): void {
    }

    //component real dom dan cikarilmadan hemen oncesinde calisir.
    componentWillUnmount(): void {
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        return true;
    }

    render() {
        const first: Array<string> = ['Ali', 'Aras'];
        let date: string = new Date().toLocaleTimeString();
        let element = <div>
            {first[0]}{first[1]}
            <h1>{date}
            </h1></div>;
        return element;
    }

}