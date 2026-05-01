import './index.css'
import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class BrowserHistory extends Component {
  state = {historyList: initialHistoryList, searchInput: ''}

  onChangeInput = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  buttononchange = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(eachdlete => eachdlete.id !== id)
    this.setState({historyList: updatedList})
  }

  render() {
    const {historyList, searchInput} = this.state
    const updatedList = historyList.filter(eachmap =>
      eachmap.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="maincontanier">
        <div className="searchContanier">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="appimage"
          />
          <div className="inputcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="imagesearch"
            />
            <input
              type="search"
              placeholder="Search history"
              className="inputsearch"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="cardConaitner">
          {updatedList.length === 0 ? (
            <p className="empty">There is no history to show</p>
          ) : (
            <ul className="eachone">
              {updatedList.map(eachuser => (
                <li className="eachapp" key={eachuser.id}>
                  <p className="timeheading">{eachuser.timeAccessed}</p>
                  <img
                    src={eachuser.logoUrl}
                    alt="domain logo"
                    className="logoimage"
                  />
                  <p className="titlecontent">{eachuser.title}</p>
                  <p className="domaincontent">{eachuser.domainUrl}</p>
                  <button
                    type="button"
                    className="imagebutton"
                    data-testid="delete"
                    onClick={() => this.buttononchange(eachuser.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                      className="deleteimage"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
