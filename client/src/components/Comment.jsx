import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

export default () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there.</p>
          <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

  </Comment.Group>
)