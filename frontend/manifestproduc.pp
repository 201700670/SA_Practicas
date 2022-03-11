include 'docker'

  docker::image {'andreapalomo/pareja2':
     image_tag => 'latest'
  }

  docker::run{'pruebas':
     image      => 'andreapalomo/pareja2',
     ports      => ['8082:3000'],
  }