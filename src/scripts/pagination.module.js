function getQuery(classSelector){
  const queryString = document.getElementsByClassName(classSelector).innerHTML;
  return queryString;
}

