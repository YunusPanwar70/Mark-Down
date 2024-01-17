const body = document.querySelector("body");

// code

const mainContainer = createAndAppend("div", "class", "main_Container", body);
const form = createAndAppend("form", "class", "form", mainContainer);
const input = createAndAppend("input", "type", "text", form);
const submitForm = createAndAppend("input", "type", "submit", form);

// events
form.addEventListener("submit", todoList);

function todoList(sub) {
    sub.preventDefault();
    let task = input.value;

    const containerTodo = createAndAppend(
        "div",
        "class",
        "Container_Todo",
        mainContainer
    );
    const para = createAndAppend("p", "class", "Text", containerTodo, task, {
        background: "lime",
        font: "grey 20px",
    });
    const editBtn = createAndAppend(
        "button",
        "class",
        "Edit_Btn",
        containerTodo,
        "Edit"
    );
    const DeleteBtn = createAndAppend(
        "button",
        "class",
        "Delete_Btn",
        containerTodo,
        "Delete"
    );

    //   delete btn
    DeleteBtn.addEventListener("click", deleteEvent);

    //   edit btn
    editBtn.addEventListener("click", editEvent);

    // edit button
    function editEvent() {
        editBtn.removeEventListener("click", editEvent);
        const replacingTextForm = createAndAppend(
            "form",
            "class",
            "Replacing_Text_Form",
            containerTodo
        );
        const replacingTextInput = createAndAppend(
            "input",
            "type",
            "text",
            replacingTextForm
        );
        createAndAppend("input", "type", "submit", replacingTextForm);

        replacingTextForm.addEventListener("submit", submitingReplace);

        function submitingReplace(sub) {
            sub.preventDefault();
            const newValue = replacingTextInput.value;
            para.innerText = newValue;
        }
    }

    // delete Event
    function deleteEvent() {
        if (confirm("are you sure")) {
            containerTodo.remove();
        }
    }
}

// constructer function
function createAndAppend(ele, attributeType, attributeName, parent, text) {
    const element = document.createElement(ele);
    if (attributeType && attributeName) {
        element.setAttribute(attributeType, attributeName);
    }
    if (parent) {
        parent.appendChild(element);
    }
    if (text) {
        element.innerText = text;
    }
    return element;
}