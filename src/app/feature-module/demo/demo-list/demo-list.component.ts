import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ToasterService } from 'src/app/core/services/toaster/toaster.service';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import Swal from 'sweetalert2'

enum FieldType {
  Id = "Id",
  Text = "Text",
  Image = "Image",
  Actions = "Actions",
  Check = "Check"
}

enum GridType {
  Id = "Id",
  Image = "Image",
  Text = "Text",
  Actions = "Actions",
}

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})
export class DemoListComponent implements OnInit {
  columns: any;
  column: any
  APIRouteTable: any;
  APIRouteGrid: any;
  ID: any;
  DataTable: any;
  currentYear: number = new Date().getFullYear();
  isGrid: boolean = false;

  constructor(
    private router: Router,
    private confirmationDialogService: ConfirmDialogService,
    private toaster: ToasterService,
    private translate: TranslateService
  ) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  ngOnInit(): void {
    this.onGetTable();
    this.onGetGrid();
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  // onGetTransalate() {
  //   this.translate.get('DemoListComponent.heading').subscribe((res: string) => {
  //     console.log(res);
  //   });
  // }

  onGetTable() {
    debugger
    this.columns = [
      {
        name: 'check',
        label: 'check',
        type: FieldType.Check,
        style: {
          'width': '5%',
        }
      },
      {
        name: 'id',
        label: 'ID',
        type: FieldType.Id,
        userId: 'id',
        image: '',
        style: {
          'width': '15%',
        }
      },
      {
        name: 'title',
        label: 'Title',
        type: FieldType.Text,
        userId: 'id',
        image: '',
        style: {
          'width': '25%',
        }
      },
      {
        name: 'url',
        label: 'Image',
        type: FieldType.Image,
        userId: 'id',
        image: 'url',
        style: {
          'width': '15%',
        }
      },
      {
        name: 'albumId',
        label: 'AlbumId',
        type: FieldType.Id,
        userId: 'id',
        image: '',
        style: {
          'width': '15%',
        }
      },
      {
        name: 'action',
        label: 'Action',
        image: '',
        type: FieldType.Actions,
        actions: [
          { name: 'edit', lable: 'Edit', userId: 'id' },
          { name: 'delete', lable: 'Delete', userId: 'id' },
          { name: 'audit', lable: 'audit', userId: 'id' },
        ],
        style: {
          'width': '15%',
        }
      },
    ];
    this.APIRouteTable = 'https://jsonplaceholder.typicode.com/photos';
  }

  onGetGrid() {
    this.column = [
      {
        name: 'url',
        label: 'image',
        type: GridType.Image,
        userId: 'id',
        Image: 'url'
      },
      {
        name: 'title',
        label: 'title',
        type: GridType.Text,
        userId: 'id',
        Image: 'url'
      },
      {
        name: 'action',
        label: 'Action',
        type: GridType.Actions,
        actions: [
          { name: 'edit', lable: 'Edit', userId: 'id' },
          { name: 'delete', lable: 'Delete', userId: 'id' }
        ]
      },
    ];
    this.APIRouteGrid = 'https://jsonplaceholder.typicode.com/photos';
  }
  onEdit($event: any): void {
    debugger
    console.log($event);
    this.router.navigate(['/demo/demo-add'], {
      queryParams: { DataTable: $event.data },
    });
  }

  onDelete($event: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  // onDelete($event: any): void {
  //   console.log($event);
  //   this.confirmationDialogService.confirm('Confirm Remove', 'Do you really want to remove?')
  //     .then((confirmed) => {
  //       if (confirmed == true) {
  //         // this.services.Delete($event.id);
  //         this.toaster.typeSuccess("Thank You", "Deleted successfully");
  //       }
  //       else {
  //         this.toaster.typeError("Error", "It was not deleted successfully");
  //       }
  //       console.log('User confirmed:', confirmed)
  //     })
  //     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }
}
