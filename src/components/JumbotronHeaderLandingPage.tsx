import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumbotronHeaderLandingPage = (props : any) => {
  return (
    <div>
      <Jumbotron className="">
        <h1 className="display-3">React Store</h1>
            <p className="lead">
            Хранилище React компонентов, утилит и других обьектов для многоразового переиспользования.<br />
            Ниже буду приведены иструкции по установке библиотек, фреймворков и другое.
            </p>
        <hr className="my-2" />
        <p>Ссылка на сайт React</p>
        <p className="lead">
            <Button color="secondary">Click</Button>{' '}
        </p> 
      </Jumbotron>
    </div>
  );
};

export default JumbotronHeaderLandingPage;