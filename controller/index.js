const getHome = (req, res) => {
  res.render('index.html', {
    title: '웹개발실습'
  });
};

export default { getHome };
