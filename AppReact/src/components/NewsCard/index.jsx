import { Image, Header, Button, Icon, List } from 'semantic-ui-react';

export default function NewsCard ({ imageUrl, header, description, date, link }) {
  let formatDate = new Date(date);
  

  return (
    <List.Item>
      <List.Content floated='left'>
      {
        imageUrl ? (
          <Image src={imageUrl} size='medium'/>
        ) : (
          <Icon name='image outline' size='massive' />
        )
      }
      </List.Content>
      <List.Content>
        <Header>{header}</Header>
        <List.Description style={{marginTop: '24px'}}>{description}</List.Description>
      </List.Content>
      <List.Content floated='left'>
        <List.Header style={{marginTop: '32px'}}>{formatDate.toLocaleDateString()}</List.Header>
      </List.Content>
      <List.Content floated='right'>
        <Button href={link} target="_blank" style={{marginTop: '32px'}}>Ver más</Button>
      </List.Content>
    </List.Item>
  );
};