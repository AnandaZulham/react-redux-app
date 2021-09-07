import {useEffect} from 'react';
import {Container, Button, Spinner} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {getDataUser} from '../action/actionUser';
import {connect} from 'react-redux';

const {SearchBar} = Search

const columns = [{
  dataField: 'id',
  text: 'ID',
  headerStyle: {
	width: '10%'
  },
  sort: true,
}, {
  dataField: 'name',
  text: 'Name',
  sort: true,
  style : {
	overflow: 'scroll'
  }
}, {
  dataField: 'email',
  text: 'E-mai',
  sort: true,
  style : {
	overflow: 'scroll'
  },
  headerStyle: {
	overflow: 'scroll'
  }
},
  {
  dataField: 'action',
  text: 'Action',
  formatter: () => (
	<>
	  <Button color="warning" className="mr-2 mb-2">Edit</Button>
	  <Button color="danger">Hapus</Button>
	</>
  )
}
];



function TableComponents(props) {
  console.log(props)
  useEffect(() => {
	props.dispatch(getDataUser())	
  })

  const options = {
	sizePerPage: 5,
	hideSizePerPage: true, 
	hidePageListOnlyOnePage: true
  }
  return (
	<>
	  <Container className="mt-4">
		{props.dataUser ? 
		<ToolkitProvider bootstrap4 keyField="id" data={props.dataUser} columns={columns}   search>
		  {props => (
			<>
			  <SearchBar {...props.searchProps} placeholder="Cari berdarkan ID, Nama, Provinsi" />
			  <hr />
			  <BootstrapTable {...props.baseProps} pagination={paginationFactory(options)} />
			</>
		  )}
		</ToolkitProvider>
		: <div className="text-center">
			<Spinner type="grow" color="success" style={{width:"3em",height:"3em"}}/>
		  </div>
		} 
	  </Container>
	</>
  )
}

const mapStateToProps = (state) => ({
  dataUser: state.users.getUsers
})
export default connect(mapStateToProps, null)(TableComponents);
