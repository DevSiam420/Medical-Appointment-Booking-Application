const STORAGE_KEY = "readList";

// -- Get Data from localStorage --
const GetStoredData = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData).map(Number) : [];
};

// -- Add doctor id --
const AddToStoreDB = (id) => {
  const numericId = Number(id);
  const storedData = GetStoredData();

  if (storedData.includes(numericId)) {
    return false; // already exists
  }

  storedData.push(numericId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
  return true;
};

export { AddToStoreDB, GetStoredData };
