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
      },
      {
        title: "समिधा - साधना आमटे",
        date: "",
        url: "https://www.goodreads.com/book/show/8532416-samidha"
      },
      {
        title: "Sapiens: A Brief History of Humankind",
        date: "June 2021",
        url: "https://www.goodreads.com/book/show/23692271-sapiens"
      },
      {
        title: "Hooked: How to Build Habit-Forming Products",
        date: "August 2021",
        url: "https://www.goodreads.com/book/show/22668729-hooked"
      },
      {
        title: "Zero To One - Peter Thiel",
        date: "January 2022",
        url: "https://www.goodreads.com/book/show/18050143-zero-to-one"
      },
      {
        title: "Raavan: Enemy of Aryavarta",
        date: "March 2022",
        url: "https://www.goodreads.com/book/show/35286872-raavan"
      },
      {
        title: "21 Lessons for the 21st Century",
        date: "Jan 2023",
        url: "https://www.goodreads.com/book/show/38820046-21-lessons-for-the-21st-century?from_search=true&from_srp=true&qid=eTqTTNPdVD&rank=1"
      },
      {
        title: 'श्रीमान योगी by Ranjit Desai',
        url: 'https://www.goodreads.com/en/book/show/6727757'
      },
      {
        title: 'Shivaji: The Grand Rebel by Dennis Kincaid',
        url: 'https://www.goodreads.com/book/show/28230236-shivaji'
      },
      {
        title: 'Dune - Frank Herbert',
        url: 'https://www.goodreads.com/book/show/44767458-dune'
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
        {book.title}
            </a>
          </li>
        ))}
      </ul>
    );
}
