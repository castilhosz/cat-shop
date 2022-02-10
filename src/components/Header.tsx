import React, { Component } from 'react';
import styles from '../styles/components/Header.module.css'

class Header extends Component {
  state = {
    opacity: '1'
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;

        if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
          this.setState({ opacity: "0" })
        } else {
          this.setState({ opacity: "1" })
        }
      }
    }
  }

  render() {
    return (
      <div className={styles.header} style={{ opacity: `${this.state.opacity}` }}>
        <p>&quot;) bubs_shop</p>

        <nav>
          <ul>
            <li><a href="/">FEED</a></li>
            <li><a href="/estoque"></a>EM ESTOQUE</li>
          </ul>
        </nav>

        <a>login</a>
      </div>
    )
  }
}

export default Header