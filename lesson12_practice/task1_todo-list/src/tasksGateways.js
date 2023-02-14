const baseUrl = 'https://639db0201ec9c6657baffddd.mockapi.io/api/v1/tasks-list';

export const fetchTasksList = () => {
  return fetch(baseUrl).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load tasks-list');
    }
    return response.json();
  });
};

export const createNewTask = (newTask) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create new task');
    }
  });
};

export const updateTask = (id, newTask) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  });
};

export const deleteTask = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
};
