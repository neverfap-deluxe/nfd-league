import * as React from 'react';

class AccountabilityPost extends React.Component {
  render() {
    const { message: { username, content, /* created_at */ } } = this.props;
    
    return (
      <div className='accountability__post'>
        {/* <div className='accountability__post__username'>{username}</div> */}
        <div className='accountability__post__content'>{content}</div>
      </div>
    )
  }
}

export default AccountabilityPost;


