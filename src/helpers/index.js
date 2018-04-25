export function newId(array) {
  const ids = array.map(gift => gift.id);
  const maxId = array.length > 0 ? Math.max(...ids) : 0;
  return maxId + 1; 
}