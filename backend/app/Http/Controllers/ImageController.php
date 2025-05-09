<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function index()
    {
        $files = Storage::disk('public')->files('images');

        $data = array_map(function ($file) {
            return [
                'filename' => basename($file),
                'folder' => dirname($file),
                'url' => asset('storage/' . $file),
            ];
        }, $files);

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:5120',
        ]);

        $path = $request->file('image')->store('images', 'public');

        return response()->json([
            'message' => 'Image uploaded successfully.',
            'filename' => basename($path),
            'folder' => dirname($path),
            'url' => asset('storage/' . $path),
        ]);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'filename' => 'required|string',
        ]);

        $filePath = 'images/' . $request->input('filename');

        if (Storage::disk('public')->exists($filePath)) {
            Storage::disk('public')->delete($filePath);
            return response()->json(['message' => 'Image deleted successfully.']);
        }

        return response()->json(['message' => 'Image not found.'], 404);
    }
}
