// A simple todo store...

class TodoStore {
    todos = [];

    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length;
    }

    report() {
        if (this.todos.length === 0) return '<none>';
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return (
            `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`
        );
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null,
        });
    }
}

const todoStore = new TodoStore();

todoStore.addTodo('read MobX tutorial');
console.log(todoStore.report());

todoStore.addTodo('try MobX');
console.log(todoStore.report());

todoStore.todos[0].completed = true;
console.log(todoStore.report());

todoStore.todos[1].task = 'try MobX in own project';
console.log(todoStore.report());

todoStore.todos[0].task = 'grok MobX tutorial';
console.log(todoStore.report());
