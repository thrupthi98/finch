import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptionDetails = [
    {'id': 
      {'oid':'5e784bb19b904e4325d370e5'},
    'ptId': 'PKN1_yFH7e',
    'medicines':
      [{'brndNm': 'Dolo 650',
      'gnrcNm': 'Dolo',
      'type': 'Capsule',
      'qntyUnit':'5',
      'durn': '11 days',
      'dosage':'1-0-1'},
      {'brndNm': 'Crocin 100',
      'gnrcNm': 'Crocin',
      'type': 'Capsule',
      'qntyUnit':'9',
      'durn': '9 days',
      'dosage':'1-0-0'}],
    'createdAt':'2020-03-23T05:40:01.195+00:00'
    },

    {'id': 
      {'oid':'5e784e779b904e4325d370ec'},
    'ptId': 'PKN1OQXLue',
    'medicines':
      [{'brndNm': 'Crocin 100',
      'gnrcNm': 'Crocin',
      'type': 'Capsule',
      'qntyUnit':'9',
      'durn': '9 days',
      'dosage':'1-0-0'}],
    'createdAt':'2020-03-23T06:43:04.104+00:00'
    },
    
    {'id': 
      {'oid':'5e784e779b904e4325d370ed'},
    'ptId': 'PKN1OQXLue',
    'medicines':
      [{'brndNm': 'Scgfvhd',
      'gnrcNm': 'Svdgvshjdg',
      'type': 'Lotion',
      'qntyUnit':'1',
      'durn': '21 days',
      'dosage':'0-0-1'}],
    'createdAt':'2020-03-23T06:01:45.542+00:00'
    },

    {'id': 
      {'oid':'5e7850c99b904e4325d370f1'},
    'ptId': 'PKN1_yFH7e',
    'medicines':
      [{'brndNm': 'Kfokdjgnfj',
      'gnrcNm': 'Ffhjdfjdm',
      'type': 'Facewash',
      'qntyUnit':'2',
      'durn': '30 days',
      'dosage':'1-1-1'}],
    'createdAt':'2020-03-23T05:51:51.190+00:00'
    },

  ];;

  constructor() { }

  ngOnInit(): void {

  }

}
