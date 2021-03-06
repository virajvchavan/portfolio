/** @jsx jsx */
import { jsx } from 'theme-ui'

export default () => {
    const books = [
      {
        title: "The 7 habits of highly effective People",
        date: "",
        url:
          "https://www.goodreads.com/book/show/36072.The_7_Habits_of_Highly_Effective_People"
      },
      {
        title: "Who says elephants can't dance - Lou Gerstener",
        date: "",
        url:
          "https://www.goodreads.com/book/show/603985.Who_Says_Elephants_Can_t_Dance_"
      },
      {
        title: "Dance Dance Dance - Murakami",
        date: "",
        url:
          "https://www.goodreads.com/book/show/17800.Dance_Dance_Dance?ac=1&from_search=true&qid=whzdNWlwOp&rank=1"
      },
      {
        title: "A thousand splendid suns - Khaled Hosseini",
        date: "",
        url: "https://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns"
      },
      {
        title: "Dharma Yuddha (Marathi)",
        date: "",
        url: "https://www.amazon.in/Dharma-Yudha-Ravindra-Thakur/dp/B07D2HCV43"
      },
      {
        title: "Who moved my cheese",
        date: "",
        url:
          "https://www.goodreads.com/book/show/4894.Who_Moved_My_Cheese_?ac=1&from_search=true&qid=cH9Bz4Zh6i&rank=1"
      },
      {
        title: "Digital fortress - Dan brown",
        date: "",
        url: "https://www.goodreads.com/book/show/11125.Digital_Fortress"
      },
      { title: "मी एक कार्यकर्ता - Tatyasaheb Kore", date: "April 2019", url: "" },
      {
        title: "Rich Dad Poor Dad",
        date: "May 2019",
        url: "https://www.amazon.in/Rich-Dad-Poor-Teach-Middle/dp/1612680011"
      },
      {
        title: "Connect the Dots",
        date: "Aug 2019",
        url: "https://www.amazon.in/Connect-Dots-Rashmi-Bansal/dp/9381626707"
      }
    ];

    return (
      <ul>
        {books.map((book, key) => (
          <li key={key}>
            <a
              href={book.url || "#"}
              target={book.url ? "_blank" : ''}
              style={{ color: "unset", textDecoration: "none" }}
            >
        {book.title} <span style={{fontSize: '13px', color: 'grey'}}>{book.date ? '- ' + book.date : ''}</span>
            </a>
          </li>
        ))}
      </ul>
    );
}
