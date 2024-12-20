const getHome = (req, res) => {
  res.render('index.html', {
    title: '웹개발실습',
    subtitle: '사용자 등록 폼'
  });
};

export default { getHome };
