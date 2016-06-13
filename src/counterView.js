/**
 * Created by alexanderbol on 11/06/2016.
 */

export class CounterView  {

    constructor(counter)
    {
        this.model = counter;
    }

    render() {
        document.body.innerHTML = "";
        // Template literals
        document.body.innerHTML +=
        `<div>
            <h1 id='counter'>${this.model.value}</h1>
            <button id='increment'><h3>Increment</h3></button>
            <button id='decrement'><h3>Decrement</h3></button>
        </div>`;

        // Bind "this" with fat arrow function
        document.getElementById('increment')
            .addEventListener('click', () => this.increment());
        document.getElementById('decrement')
            .addEventListener('click', () => this.decrement());
    };

    increment() {
        this.model.increment();
        this.render();
    };

    decrement() {
        this.model.decrement();
        this.render();
    };
};