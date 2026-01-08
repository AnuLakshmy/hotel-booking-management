import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from '../core/constants';
@Injectable({
  providedIn: 'root',
})
export class RoomService {

  private apiUrl = 'http://localhost:9091/api/rooms';

  constructor(private http: HttpClient) {}

  getAllRooms() {
    return this.http.get(`${this.apiUrl}`);
  }

  getRoomById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateRoom(id: number, room: any) {
    return this.http.put(`${this.apiUrl}/${id}`, room);
  }

  deleteRoom(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
