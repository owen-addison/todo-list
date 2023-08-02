import project from "./project";
import todoList from "./todoList";

function rebuild(projArray) {
  const newProjArray = [];
  projArray.forEach((proj) => {
    // console.log(proj);
    const oldListArray = proj.listArray;
    const newListArray = [];
    oldListArray.forEach((list) => {
      const newListElement = todoList(
        list.name,
        list.id,
        list.info,
        list.type,
        list.todoArray
      );
      newListArray.push(newListElement);
    });
    // console.log(newListArray);
    const rebuiltProj = project(
      proj.name,
      proj.id,
      proj.info,
      proj.type,
      newListArray
    );
    // console.log(rebuiltProj);
    newProjArray.push(rebuiltProj);
  });
  console.log(newProjArray);
  return newProjArray;
}

export default rebuild;
