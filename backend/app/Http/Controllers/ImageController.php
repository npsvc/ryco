<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:5120'
        ]);

        $path = $request->file('image')->store('images', 'public');

        return response()->json([
            'message' => 'Image uploaded successfully.',
            'path' => $path,
            'url' => asset('storage/' . $path),
        ]);
    }
}
