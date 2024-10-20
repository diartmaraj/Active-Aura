import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const CustomFileInput = ({ onFileChange }) => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        const newFiles = acceptedFiles.map((file) => ({
            id: uuidv4(),
            file,
            preview: URL.createObjectURL(file),
        }));
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        // Call the onFileChange prop to update the parent state
        onFileChange([...files, ...newFiles]);
    }, [files, onFileChange]);

    const removeFile = (fileId) => {
        setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
        const removedFile = files.find((file) => file.id === fileId);
        // Call the onFileChange prop to update the parent state
        onFileChange(files.filter((file) => file.id !== fileId));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white w-full">
            <div {...getRootProps()} className={`border-2 border-dashed p-6 rounded-lg ${isDragActive ? 'border-blue-500' : 'border-gray-300'} flex flex-col items-center`}>
                <input {...getInputProps()} />
                <FaCloudUploadAlt className="text-4xl text-gray-400 mb-4" />
                {isDragActive ? (
                    <p className="text-blue-500">Drop the files here...</p>
                ) : (
                    <p className="text-gray-500">Drag and drop some files here, or click to select files</p>
                )}
            </div>
            <div className="mt-4">
                {files.length > 0 && (
                    <ul className="space-y-2">
                        {files.map((file) => (
                            <li key={file.id} className="flex justify-between items-center border border-gray-200 p-2 rounded-lg shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <img src={file.preview} alt={file.file.name} className="w-10 h-10 object-cover rounded" />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-700">{file.file.name}</span>
                                    </div>
                                </div>
                                <button onClick={() => removeFile(file.id)} className="text-red-500 hover:text-red-700">
                                    <FaTrashAlt />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomFileInput;
