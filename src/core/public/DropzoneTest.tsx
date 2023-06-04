import Dropzone from '@/components/functional/Dropzone/Dropzone'
import { FileView } from '@/components/ui/data-display/FileView'
import { Upload } from '@/components/ui/data-entry/Upload'
import { useState } from 'react'

const DropzoneTest = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const onDropChange = (files: File[]) => {
    setSelectedFiles([...selectedFiles, ...files])
  }
  return (
    <div className="container mx-auto">
      <Dropzone onChange={onDropChange}>
        <Upload helperText="SVG, PNG, JPG or GIF (max 800*400px)">
          {selectedFiles.length && (
            <>
              {selectedFiles.map((file) => {
                return (
                  <FileView
                    fileName={file.name}
                    fileDetails={String(file.type)}
                    errorMessage={
                      file.name.includes('default')
                        ? 'File name not supported'
                        : ''
                    }
                    key={file.name}
                    className="my-1"
                    onClick={(event: React.MouseEvent) =>
                      event.stopPropagation()
                    }
                  />
                )
              })}
            </>
          )}
        </Upload>
      </Dropzone>
    </div>
  )
}

export default DropzoneTest
