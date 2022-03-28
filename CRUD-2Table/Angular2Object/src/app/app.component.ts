import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from "./dialog/dialog.component";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {City} from "./model/city";
import {CityService} from "./service/city.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Angular2Object';
  displayedColumns: string[] = ['id', 'name', 'national', 'area', 'population', 'gdp', 'description', 'action'];
  dataSource!: MatTableDataSource<any>;

  formCity: FormGroup = new FormGroup({});
  cities!: City[];
  city!: City;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog,
              private cityService: CityService,
              private formGroup: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllCity()
  }

  openFormCreate() {
    this.dialog.open(DialogComponent, {
      width: '50%'
    });
  }

  openFormEdit(row: any) {
    this.dialog.open(DialogComponent, {
      width: '50%',
      data: row
    })
  }

  getAllCity() {
    this.cityService.getAllCity().subscribe((data) => {
      this.cities = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.formCity.reset();
  }

  getCity(id: number) {
    this.cityService.getCityById(id).subscribe((data) => {
      this.cities = [];
      this.cities.push(data);
    })
  }

  deleteCity(id: number, name: string) {
    if (confirm('Are you sure delete city:' + name + '?')) {
      this.cityService.deleteCity(id).subscribe(() => {
        this.getAllCity();
        alert('Delete successfully');
      })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllCity();
  }
}
